# Example ->  1 

# Creating a matrix
# A matrix can be created using matrix() function.

# R program to create a matrix 
m <- matrix(1:8, nrow=2) 
print(m) 


# Output:

  #   [,1] [,2] [,3] [,4]
# [1,]    1    3    5    7
# [2,]    2    4    6    8


# Example -> 2 
# Multiplication with Vector

# R program for matrix multiplication 

# Creating matrix 
m <- matrix(1:8, nrow=2) 

# Creating a vector 
vec <- 1:2

# Multiplying matrix with vector 
print(vec*m) 

# Output:

  #   [,1] [,2] [,3] [,4]
# [1,]    1    3    5    7
# [2,]    4    8   12   16

 # Example -> 3
 # Multiplication using %*% operator
 
 # R program for matrix multiplication 

# Creating matrices 
m <- matrix(1:8, nrow=2) 
n <- matrix(8:15, nrow=4) 

# Multiplying matrices using operator 
print(m %*% n) 


# Output:

  #   [,1] [,2]
# [1,]  162  226
# [2,]  200  280
# This is how multiplication takes place:

# 1*8+3*9+5*10+7*11 = 162      1*12+3*13+5*14+7*15=226
# 2*8+4*9+6*10+8*11 = 200      2*12+4*13+6*14+8*15=280

# Thank You  -> :)
