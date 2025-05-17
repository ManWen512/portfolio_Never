// app/page.js
import fs from 'fs/promises';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), 'app/posts', 'post1.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const post = JSON.parse(fileContent);

  const { title, date, tags, imageUrl, body } = post;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-2">{new Date(date).toLocaleDateString()}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}
     <div className="prose">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
              >
                {children}
              </a>
            ),
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
