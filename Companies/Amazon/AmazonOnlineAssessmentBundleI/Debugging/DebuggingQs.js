/**
DEBUGGING
7 questions in 21 mins

Possible bugs:

 - Count Occurrences
     - Missing i++ at the end of while loop

 - Print Pattern
      - Missing { } to wrap up the two lines of code in a for-loop, causing the
        second line to be excluded from the for-loop.

 - Insert Sort Descending Order:
       - change ‘>’ (greater than) to ‘<‘ (less than)

 - Select Sort
        - change arr[min] > arr[x] to arr[min] > arr[y]

 - Reverse Array
        - change arr[len - 1] to arr[len - i - 1]
        - remove len += 1 at the end of the loop

 - Manchester Array
        - change result=(a[i]==a[i-1]) to result=(a[i]!=a[i-1])
        - same for ret[0]

 - Check Grades
        - change both of || to &&

 - Replace Even/Odd Values
        - i <= len and j <= len change into < 6

 TIPS FOR DEBUGGING
 - Sorting functions: most likely give the wrong order.
         - Fix: Find the key if statement and reverse the condition for comparison.from aonecode.com
 - TLE (Time Limit Exceeded): dead loop WHILE
         - Fix: check for i++ at the end

 - FOR loop: missing { }
         - check whether { } is there for the FOR loops
 */