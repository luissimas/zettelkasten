#!/usr/bin/env bash

for file in "$1"*.org; do
    pandoc "$file" -o "${file%.org}.md" --wrap=none
    # echo "$file -> ${file%.org}.md"
done
