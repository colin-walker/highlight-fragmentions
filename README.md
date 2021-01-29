# Highlight fragmentions

Highlight paragraphs containing fragmentise using JavaScript

A JavaScript function to highlight the paragraph surrounding text passed via URL as a fragmention.

The initial idea for fragmentions proposed that fragments of a page could be targeted by passing text via the URL in the format:

http://example.com##example+text+goes+here

This function takes that text, finds the paragraph containing it and highlights it with the CSS of your choice. Apply CSS to the body [fragmention] element.
