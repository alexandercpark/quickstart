import { Component } from '@angular/core';

@Component({
  selector: 'blogpost',
  template: `
    This is a placeholder for a blog post:
    <div>
      <p>
        {{content}}
      </p>
    </div>
  `,
})

export class BlogPostComponent  {
  content = "Some Test";
}