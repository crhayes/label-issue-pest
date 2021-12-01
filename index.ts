import * as github from "@actions/github";
import * as core from "@actions/core";

async function run() {
  try {
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const issue = github.context.payload.issue;

    if (!issue) return;

    const mentionPrefix = issue.user?.login ? `@${issue.user.login} ` : ``;
    const message = `${mentionPrefix}${core.getInput("message")}`;

    if (issue.labels.length === 0) {
      octokit.rest.issues.createComment({
        issue_number: github.context.issue.number,
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        body: message,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed("An error occurred.");
    }
  }
}

run();
