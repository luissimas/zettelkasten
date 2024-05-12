#!/usr/bin/env python3

import os
import glob
import sys

def migrate_files(directory):
    # Get a list of all .md files in the directory
    md_files = glob.glob(os.path.join(directory, '*.md'))

    # Loop through each .md file
    for file_path in md_files:
        print(f"Processing {file_path}")
        with open(file_path, 'r') as file:
            # Read the content of the file
            lines = file.readlines()

        # Remove backmatter and put data in frontmatter
        separator_index = -1
        for i, line in enumerate(reversed(lines)):
            if '---' in line:
                separator_index = len(lines) - i 
                break
        if separator_index != -1:
            note_content = lines[:separator_index - 1]
        else:
            note_content = lines
        back_matter = lines[separator_index - 1:]
        created_at = ""
        for line in back_matter:
            if line.startswith("created:"):
                _, date = line.split(": ")
                day, month, year = date.strip().split("/")
                created_at = f"{year}-{month}-{day}"
        frontmatter = ""
        if created_at:
            frontmatter = f"---\ncreated-at: {created_at}\n---\n"

        # Remove first title and reduce all headings
        for i in range(len(note_content)):
            if note_content[i].startswith("# "):
                note_content[i] = ""
            elif note_content[i].startswith("#"):
                note_content[i] = note_content[i][1:]

        result = frontmatter + "".join(note_content).strip()
        # print(result)

        # Write the manipulated content back to the file
        with open(file_path, 'w') as file:
            file.write(result)

        print(f"Processed {file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("USAGE: migrate.py <directory>")
        sys.exit(1)
    migrate_files(sys.argv[1])
    print("Done")
