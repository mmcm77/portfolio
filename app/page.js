import Image from "next/image"


export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
 <div className="flex flex-col items-center mt-8">

      <h1 className="text-3xl font-bold mb-2">About Me</h1>
      <p className="text-lg text-center">
        Hi there! I'm Mike, and this is my playground for learning. 
      </p>

      <div className="flex justify-center mt-6 space-x-4">
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-4xl text-blue-500 hover:text-blue-700"></i>
        </a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-4xl text-gray-600 hover:text-gray-800"></i>
        </a>
      </div>
    </div>

  
      </main>
    )
  }
  