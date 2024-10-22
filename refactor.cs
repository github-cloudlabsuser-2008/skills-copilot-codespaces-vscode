using System;

class Program
{
    const int MIN_ELEMENTS = 1;
    const int MAX_ELEMENTS = 100;

    static void Main(string[] args)
    {
        try
        {
            int numberOfElements = GetNumberOfElements();
            int[] elements = GetElements(numberOfElements);
            int total = Sum(elements);

            Console.WriteLine("Sum of the numbers: " + total);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

    static int GetNumberOfElements()
    {
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < MIN_ELEMENTS || n > MAX_ELEMENTS)
        {
            throw new ArgumentException("Invalid input. Please provide a digit ranging from 1 to 100.");
        }
        return n;
    }

    static int[] GetElements(int numberOfElements)
    {
        int[] arr = new int[numberOfElements];
        Console.WriteLine("Enter " + numberOfElements + " integers:");
        for (int i = 0; i < numberOfElements; i++)
        {
            if (!int.TryParse(Console.ReadLine(), out arr[i]))
            {
                throw new ArgumentException("Invalid input. Please enter valid integers.");
            }
        }
        return arr;
    }

    static int Sum(int[] arr)
    {
        int total = 0;
        foreach (int num in arr)
        {
            total += num;
        }
        return total;
    }
}