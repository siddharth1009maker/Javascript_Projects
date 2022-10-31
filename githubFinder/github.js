class Github {
    constructor(){
        this.client_id = "93471f60df413b6db04b";
        this.client_secret = "cf7ae7bd19673041dae54ee4071a57d0b8af5db8";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user)
    {
        const profileSearch = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoSearch = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileSearch.json();
        const repo = await repoSearch.json();
        return {
            profile,
            repo
        }
    }
}
