# Blazor JavaScript Interop Demo

This repository contains a comprehensive demonstration of JavaScript interoperability in Blazor, based on **"Mastering Blazor with Visual Studio 2026 - Chapter 22"**.

## Overview

This project showcases best practices and practical examples for integrating JavaScript code with Blazor applications. It demonstrates how to call JavaScript functions from C# and vice versa, enabling seamless communication between the two technologies.

## Project Purpose

This demo project illustrates:
- **JavaScript Interop Basics**: Calling JavaScript methods from C# code
- **Blazor-to-JavaScript Communication**: Passing data from Blazor components to JavaScript
- **JavaScript-to-Blazor Communication**: Invoking C# methods from JavaScript
- **Dynamic Library Loading**: Loading JavaScript libraries at runtime
- **Error Handling**: Best practices for error handling in interop scenarios
- **Performance Optimization**: Techniques to optimize JavaScript interop calls

## Technology Stack

The project is built with the following technologies:

| Technology | Percentage | Purpose |
|-----------|-----------|---------|
| **CSS** | 48.5% | Styling and layout |
| **HTML** | 47.2% | Markup and structure |
| **C#** | 2.6% | Blazor components and backend logic |
| **JavaScript** | 1.7% | Client-side interop functionality |

## Project Structure

```
Blazor-JavaScriptInteropDemo/
├── Components/           # Blazor components
├── wwwroot/             # Static files
│   ├── css/             # CSS stylesheets
│   ├── js/              # JavaScript interop scripts
│   └── lib/             # JavaScript libraries
├── Pages/               # Page components
├── Shared/              # Shared components
└── Program.cs           # Application entry point
```

## Key Features

### 1. JavaScript Interop Examples
- Call JavaScript functions from Blazor using `IJSRuntime`
- Pass parameters and return values between languages
- Handle asynchronous JavaScript calls

### 2. Two-Way Communication
- Invoke .NET methods from JavaScript using `DotNet.invokeMethodAsync()`
- Manage component state across language boundaries

### 3. Practical Demonstrations
- DOM manipulation from Blazor
- Event handling between JavaScript and Blazor
- Working with browser APIs (localStorage, console, etc.)

## Getting Started

### Prerequisites
- Visual Studio 2026 or later
- .NET SDK (compatible version)
- Modern web browser with JavaScript support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/liewvk/Blazor-JavaScriptInteropDemo.git
   cd Blazor-JavaScriptInteropDemo
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Build the project**
   ```bash
   dotnet build
   ```

4. **Run the application**
   ```bash
   dotnet run
   ```

5. **Open in browser**
   Navigate to `https://localhost:5001` (or the port shown in your console)

## Usage Examples

### Calling JavaScript from C#

```csharp
@inject IJSRuntime JSRuntime

await JSRuntime.InvokeVoidAsync("window.alert", "Hello from Blazor!");
```

### Calling C# from JavaScript

```javascript
DotNet.invokeMethodAsync('AssemblyName', 'MethodName', parameters);
```

## Learning Resources

This project is based on Chapter 22 of "Mastering Blazor with Visual Studio 2026", which covers:
- Advanced JavaScript interop patterns
- Performance considerations
- Security best practices
- Real-world use cases and examples

## Documentation

For detailed information on each feature and example:
1. Review the component source code in the `Components/` directory
2. Check inline comments for implementation details
3. Refer to the Blazor documentation: https://learn.microsoft.com/en-us/aspnet/core/blazor/

## Best Practices

- **Minimize Interop Calls**: Batch operations to reduce overhead
- **Handle Errors Gracefully**: Use try-catch blocks for interop calls
- **Use Async/Await**: Properly handle asynchronous JavaScript operations
- **Clean Up Resources**: Dispose of JavaScript interop references appropriately
- **Test Thoroughly**: Test interop code in multiple browsers and scenarios

## Browser Compatibility

This project is compatible with:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

JavaScript interop requires JavaScript to be enabled in the browser.

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Ensure JavaScript files are in the `wwwroot/js/` directory
   - Check that file paths in `@implements IAsyncDisposable` are correct

2. **Interop calls failing silently**
   - Open browser developer console (F12) for error messages
   - Verify method names match exactly between C# and JavaScript

3. **Performance issues**
   - Reduce frequency of interop calls
   - Use JavaScript for computationally heavy operations
   - Consider using Web Workers for background tasks

## Contributing

Contributions are welcome! If you find issues or have improvements:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is provided as educational material from "Mastering Blazor with Visual Studio 2026".

## Author

Created as part of the Blazor learning materials for Visual Studio 2026.

## Additional Resources

- [Microsoft Blazor Documentation](https://learn.microsoft.com/en-us/aspnet/core/blazor/)
- [Blazor JavaScript Interop Guide](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/)
- [Visual Studio 2026 Documentation](https://learn.microsoft.com/en-us/visualstudio/)

---

**Last Updated**: September 2026

For questions or support, please open an issue on this repository.
