class GitHub {
  constructor() {
    this.client_id = '583333a5e4b042579822';
    this.client_secret = '52714a8f47fae26073e7d1af9f3c505b43c72da3';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&secret_id=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
      &sort=${this.repos_sort}&client_id=${this.client_id}
      &secret_id=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    };
  }
}
