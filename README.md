# Label Issue Pest

When an issue is missing labels, mentions a user in a comment and asks them to add labels to the issue.

## Example Usage

```yaml
on:
  issues:
    types: [opened, reopened]

jobs:
  label_issue_pest:
    runs-on: ubuntu-latest
    name: Pester author if they forgot to label their issue
    steps:
      - uses: crhayes/label-issue-pest@main
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          message: "Please add labels to your issue."
```

## Inputs

### `token` (required)

You must provide a Github token that will be used to query for data. Github automatically creates a `GITHUB_TOKEN` secret for use in your workflow.

Example:

```yaml
token: ${{ secrets.GITHUB_TOKEN }}
```

### `message` (optional)

Optionally configure the message sent to the author when an issue does not contain labels. Defaults to "Please add labels to your issue.".

Example:

```yaml
message: "Please add at least one label to your issue."
```
