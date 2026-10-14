import { Inject, Injectable } from '@nestjs/common';
import { desc } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { DATABASE } from '../database/database.module';
import { users, type NewUser } from '../database/schema';

@Injectable()
export class UsersService {
  constructor(@Inject(DATABASE) private readonly db: PostgresJsDatabase<{ users: typeof users }>) {}

  list() {
    return this.db.select().from(users).orderBy(desc(users.createdAt));
  }

  create(input: NewUser) {
    return this.db.insert(users).values(input).returning();
  }
}
