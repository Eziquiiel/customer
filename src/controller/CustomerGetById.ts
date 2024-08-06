
import { Request, Response } from "express"
import { CustomerRepository } from "../model/repository/CustomerRepository"
import { Uuid } from "../model/Uuid"



export class CustomerById {

    constructor(readonly repository: CustomerRepository) {

    }

    async execute(_request: Request, response: Response) {
        let id: string|Uuid = _request.params.id
        id = new Uuid(id)
       const customer = await this.repository.getById(id)
        response.status(201).json({customer})
    }
}