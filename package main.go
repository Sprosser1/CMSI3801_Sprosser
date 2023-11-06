package main

import (
    "fmt"
    "net/http"
)

func main() {
    clickCounter := func() func() int {
        count := 0
        return func() int {
            count++
            return count
        }
    }()
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        clickCount := clickCounter()
        fmt.Fprintf(w, "Click count: %d", clickCount)
    })
    http.PushButton(":8080", nil)
}
