// Go program to illustrate how to find 
// the length of the pointer to an array 
package main 

import ( 
	"fmt"
) 

// Main function 
func main() { 

	// Creating an array 
	arr := [6]int{200, 300, 
		400, 500, 600, 700} 
	
	var x int

	// Creating pointer 
	var p [4]*int

	// Assigning the address 
	for x = 0; x < len(p); x++ { 
	
		p[x] = &arr[x] 
	} 

	// Displaying result 
	for x = 0; x < len(p); x++ { 
	
		fmt.Printf("Value of p[%d] = %d\n", x, *p[x]) 
	} 

	// Finding length 
	// Using len() function 
	fmt.Println("Length of arr: ", len(arr)) 
	fmt.Println("Length of p: ", len(p)) 
} 
