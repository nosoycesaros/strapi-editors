# 📝 Strapi Editors

A block editor for Strapi which defines a common data model for developers

## Develop

1. Go to your Strapi application `cd my-strapi-application`
if you don't have one follow [this tutorial](https://strapi.io/documentation/v3.x/installation/cli.html)

2. Copy the following folders to your project:
* `api/pages`
* `components/atoms`
* `plugins/strapi-editors`

3. Run the app in watch mode `yarn develop --watch-admin`

## Common Data Model

This plugin proposes the implementation of [atomic design](https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time) to manage the data of your application; this allows the developers to build apps using common fields attached to component types and those won't change regardless of the information.

## Block Editor
![Strapi Editors](https://media.giphy.com/media/8HejBSNBLRnBR49SxP/giphy.gif)
