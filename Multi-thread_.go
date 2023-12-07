package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"sync"
)

func download(url string, wg *sync.WaitGroup, ch chan string) {
	defer wg.Done()

	// Make an HTTP GET request to the specified URL
	response, err := http.Get(url)
	if err != nil {
		ch <- fmt.Sprintf("Error: %s", err)
		return
	}
	defer response.Body.Close()

	// Check if the response status code is not OK (200)
	if response.StatusCode != http.StatusOK {
		ch <- fmt.Sprintf("Error: Received status code %d", response.StatusCode)
		return
	}

	// Copy the response body (webpage content) to a string
	buf := new([]byte)
	_, err = io.Copy((*os.Stdout).Write, response.Body)
	if err != nil {
		ch <- fmt.Sprintf("Error copying response body: %s", err)
		return
	}

	ch <- string(*buf)
}

func main() {
	// Check if a URL is provided as a command-line argument
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <URL>")
		return
	}

	// Get the URL from the command-line argument
	url := os.Args[1]

	// Number of goroutines to use (you can adjust this based on your needs)
	numGoroutines := 5

	// Create a WaitGroup and a channel
	var wg sync.WaitGroup
	ch := make(chan string, numGoroutines)

	// Launch goroutines to download parts of the webpage
	for i := 0; i < numGoroutines; i++ {
		wg.Add(1)
		go download(url, &wg, ch)
	}

	// Wait for all goroutines to finish
	go func() {
		wg.Wait()
		close(ch)
	}()

	// Collect and print results from the channel
	for result := range ch {
		fmt.Println(result)
	}
}
