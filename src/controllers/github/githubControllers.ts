import { Request, Response } from "express";
import { Octokit } from "@octokit/rest";
import * as dotenv from 'dotenv';
import fetch from "node-fetch";

dotenv.config();

const githubToken = process.env.GITHUB_TOKEN;
const githubUser = process.env.GITHUB_USERNAME;

const octokit = new Octokit({ 
    auth: githubToken,
    request: {
        fetch,
    }
});

export const getUserRepositoryList = (req: Request, res: Response): void => {

    if (typeof githubUser == "string") {
        getAllRepos(githubUser).then((repos) => {
            res.status(200).json({
                status: "wet333 repositories list",
                repositories: repos
            });
        })
    } else {
        res.status(400).json({
            status: "Error, invalid username"
        });
    }
    return;
};

const getAllRepos = async (username: string): Promise<string[]> => {
    let page = 1;
    const allRepos: string[] = [];
    
    while (true) {
        const { data: repos } = await octokit.repos.listForUser({
            username,
            per_page: 100,
            page,
        });
    
        if (repos.length === 0) break;
    
        for (let repo of repos) {
            allRepos.push(repo.html_url);
        }
        page++;
    }

    return allRepos;
};

const getReposWithLanguage = async (username: string, language: string): Promise<string[]> => {
    let page = 1;
    const reposWithLanguage: string[] = [];
    
    while (true) {
        const { data: repos } = await octokit.repos.listForUser({
            username,
            per_page: 100,
            page,
        });
    
        if (repos.length === 0) break;
    
        for (let repo of repos) {
            if (repo.language === language) {
            reposWithLanguage.push(repo.html_url);
            }
        }
        page++;
    }

    return reposWithLanguage;
}