# Module

## NOTES

1. Windows has a problem installing Node.js modules when the node_modules folder is open in other programs. Make sure you close down all programs that could possibly have that folder open before running `npm install`

2. If that doesn't work, open the Properties panel of the node_modules folder and make sure the "Read-Only" box is unchecked. It might take a while and it doesn't always work but it's the only way of getting it done. There is a problem with the way `npm` handles file permissions on Windows.
