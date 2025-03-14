function strStr(haystack: string, needle: string): number {
    for (let i = 0; i <= haystack.length - needle.length; i++) { // Ensure enough room for match
        let match = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break; // Stop checking if there's a mismatch
            }
        }

        if (match) return i; // Only return if we successfully matched the entire needle
    }

    return -1; // No match found
}
