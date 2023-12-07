package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	// Check if a URL is provided as a command-line argument
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <URL>")
		return
	}

	// Get the URL from the command-line argument
	url := os.Args[1]

	// Make an HTTP GET request to the specified URL
	response, err := http.Get(url)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer response.Body.Close()

	// Check if the response status code is not OK (200)
	if response.StatusCode != http.StatusOK {
		fmt.Printf("Error: Received status code %d\n", response.StatusCode)
		return
	}

	// Copy the response body (webpage content) to the standard output (terminal)
	_, err = io.Copy(os.Stdout, response.Body)
	if err != nil {
		fmt.Println("Error copying response body:", err)
		return
	}
}
