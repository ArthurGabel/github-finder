import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({auth: /*Authentication token goes here!*/})

const ui = new Ui;

class GitHub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    try {
      const getUser = await octokit.request(`GET /users/${user}`, {});
      const getRepos = await octokit.request(`GET /users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {});
      return {
        profile: getUser.data,
        repos: getRepos.data
      }
    } catch (error) {
      if (error.status === 404) {
        ui.showAlert('User not found :(');
      }
    }
  }
}

window.github = GitHub;