package main

import "fmt"

// fibonacciGenerator returns a function that generates the next Fibonacci number
func fibonacciGenerator() func() int {
	a, b := 0, 1

	return func() int {
		result := a
		a, b = b, a+b
		return result
	}
}

func main() {
	// Create a Fibonacci number generator
	fibonacci := fibonacciGenerator()

	// Print the first 10 Fibonacci numbers
	for i := 0; i < 10; i++ {
		fmt.Println(fibonacci())
	}
}
