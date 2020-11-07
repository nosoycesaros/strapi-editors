import { request } from "strapi-helper-plugin";
import { lets } from './lets'

/**
 * Executes a request to the plugin strapi API
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} body 
 */
const aRequest = (url, method, body) => lets(async () =>
  await request(`/strapi-editors/${url}`, { method, body })
)

/**
 * Requests a PUT to the API
 * 
 * @param {*} url 
 * @param {*} data 
 */
const put = async (url, data) => aRequest(url, 'PUT', data)

/**
 * Requests a GET to the API
 * 
 * @param {*} url 
 */
const get = async (url) => aRequest(url, 'GET')

/**
 * Get all items in a given collection
 * 
 * @param {*} collection 
 */
export const getCollection = async (collection) => get(collection)

/**
 * Get all content of a given element of a collection
 * 
 * @param {*} collection 
 * @param {*} id 
 */
export const getContent = async (collection, id) => get(`${collection}/${id}`)

/**
 * Updates the content of an item
 * 
 * @param {*} collection 
 * @param {*} id 
 * @param {*} data 
 */
export const saveContent = async (collection, id, data) => put(`${collection}/${id}`, data)