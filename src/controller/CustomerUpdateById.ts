import { Request, Response } from "express"
import { CustomerRepository } from "../model/repository/CustomerRepository"
import { Customer } from "../model/Customer"
import { CustomerUpdateDTO } from "./dtos/CustomerUpdateDTO"
import { Uuid } from "../model/Uuid"


export class CustomerUpdateById {

    constructor(readonly repository: CustomerRepository) {

    }

    async execute(request: Request, response: Response) {
        const {id} = request.params
        const { name, document } = request.body
        const customer = Customer.create(name, document, id)
        const customerDto = new CustomerUpdateDTO(customer.getName(), customer.getDocument().getValue())
        await this.repository.update(customer.getId(), customerDto)
        response.status(201).json({customer})
    }
}