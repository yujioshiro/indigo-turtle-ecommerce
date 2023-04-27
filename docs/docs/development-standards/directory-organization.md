# Directory Organization (Folder Structure)

General overview of what our directory should look like

```
├── client
│   └── src
│       ├── components
│       │   ├── (includes all components shared across pages)
│       │   ├── NavBar
│       │   │   └──NavBar.tsx (components can be inside their own folder like this)
│       │   ├── NavBar.tsx (or directly inside the components folder like this)
│       │   └── (if a comoponent contains smalle components that is not shared across other pages, please put it in its own)
│       ├── pages
│       │   └──  (contains each page in its own directory)
│       └── utils
│           └── (helper functions that are used across different components/pages)
├── server
│   └── src
│       ├── index.js
│       │   └── root of our code
│       └── utils
│           └── (helper functions, each file should only contain one exported function)
└── docs

```