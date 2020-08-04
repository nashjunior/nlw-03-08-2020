import { Request, Response } from 'express';
import db from '../database/connection';
export default class ConnectionsController {
  public async index(request: Request, response: Response) {
    const [total] = await db('connections').count('* as total')
    return response.status(200).json(total)
  }

  public async create(request: Request, response: Response) {
    const {user_id} = request.body

    await db('connections').insert({
      user_id
    });

    return response.status(201).json(user_id)
  }
}