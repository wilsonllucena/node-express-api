import { Controller, Get, Patch } from "@overnightjs/core";
import { Request, Response } from "express";
import { request } from "http";

@Controller('test')
export class TestController {
  @Get()
  index(req: Request, res: Response) {
    return res.status(200).json({ message: 'Hello World!' });
  }

  @Get(':id')
  show(req: Request, res: Response) {
    return res.status(200).json({ message: `${req.params.id}` });
  }

  @Patch(':id')
  update(req: Request, res: Response) {
    return res.status(200).json({ message: `${JSON.stringify(req.body)}` });
  }
}