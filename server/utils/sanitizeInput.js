import sanitize from "sanitize-html";

const sanitizeInput = (input) => {
    // Define allowed HTML tags and attributes
    const cleanInput = sanitize(input, {
        allowedTags: [],
        allowedAttributes: {}
    });
    return cleanInput;
}

export default sanitizeInput;