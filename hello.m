% How to print a sentence "Hello world!" n number of times?
n = input('Enter a number:');
for sentence = 1:n  % have the indexing go from 1 to n, not reverse
    fprintf('%d. Hello world!\n', sentence); % print the index, and a newline \n
end
