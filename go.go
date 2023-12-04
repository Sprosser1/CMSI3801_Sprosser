package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	// Check if there is exactly one command-line argument
	if len(os.Args) != 2 {
		fmt.Println("Usage: go run main.go <integer>")
		os.Exit(1)
	}

	// Parse the command-line argument as an integer
	num, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Error: Please provide a valid integer.")
		os.Exit(1)
	}

	// Calculate and display perfect squares up to the specified integer
	fmt.Printf("Perfect squares up to %d:\n", num)
	for i := 1; i*i <= num; i++ {
		fmt.Println(i * i)
	}
}
