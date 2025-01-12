#!/bin/bash

# Function to check for uncommitted changes
check_uncommitted_changes() {
  if git diff-index --quiet HEAD --; then
    echo "No changes to commit. Exiting..."
    exit 0
  fi
}

# Step 1: Check for uncommitted changes
echo "Checking for uncommitted changes..."
check_uncommitted_changes

# Step 2: Add all changes
echo "Adding changes to git..."
git add .

# Step 3: Commit changes
echo "Enter your commit message (leave empty for 'Updated project'):"
read commit_message
if [ -z "$commit_message" ]; then
  commit_message="Updated project"
fi
git commit -m "$commit_message"

# Step 4: Determine the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Step 5: Push changes
echo "Pushing changes to GitHub on branch '$current_branch'..."
git push origin "$current_branch"

echo "Changes successfully pushed to GitHub!"
