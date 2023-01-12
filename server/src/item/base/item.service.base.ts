/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Item } from "@prisma/client";

export class ItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.item.count(args);
  }

  async findMany<T extends Prisma.ItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemFindManyArgs>
  ): Promise<Item[]> {
    return this.prisma.item.findMany(args);
  }
  async findOne<T extends Prisma.ItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemFindUniqueArgs>
  ): Promise<Item | null> {
    return this.prisma.item.findUnique(args);
  }
  async create<T extends Prisma.ItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemCreateArgs>
  ): Promise<Item> {
    return this.prisma.item.create<T>(args);
  }
  async update<T extends Prisma.ItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemUpdateArgs>
  ): Promise<Item> {
    return this.prisma.item.update<T>(args);
  }
  async delete<T extends Prisma.ItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemDeleteArgs>
  ): Promise<Item> {
    return this.prisma.item.delete(args);
  }
}
