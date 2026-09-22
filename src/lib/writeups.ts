import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Writeup {
  slug: string;
  title: string;
  shortDescription: string;
  severity: Severity;
  mediumLink: string;
  date?: string;
  content?: string;
}

const writeupsDirectory = path.join(process.cwd(), 'content', 'writeups');

export function getAllWriteups(): Writeup[] {
  if (!fs.existsSync(writeupsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(writeupsDirectory);
  const writeups: Writeup[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(writeupsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    const frontmatter = data as Partial<Writeup>;

    if (!frontmatter.title || !frontmatter.shortDescription) {
      continue;
    }

    const rawDate = data.date;
    let dateStr: string | undefined;
    if (rawDate instanceof Date) {
      dateStr = rawDate.toISOString().split('T')[0];
    } else if (rawDate) {
      dateStr = String(rawDate);
    }

    writeups.push({
      slug,
      title: frontmatter.title,
      shortDescription: frontmatter.shortDescription,
      severity: (frontmatter.severity as Severity) || 'Medium',
      mediumLink: frontmatter.mediumLink || '#',
      date: dateStr,
      content,
    });
  }

  // Sort writeups by date descending (newest first)
  return writeups.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
