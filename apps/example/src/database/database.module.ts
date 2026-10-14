import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { users } from './schema';

export const DATABASE = Symbol('DATABASE');

@Global()
@Module({
  providers: [
    {
      provide: DATABASE,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const connectionString = config.get<string>('DATABASE_URL');

        if (!connectionString) {
          throw new Error('DATABASE_URL is required to start the application.');
        }

        const client = postgres(connectionString, { max: 10 });
        return drizzle(client, { schema: { users } });
      },
    },
  ],
  exports: [DATABASE],
})
export class DatabaseModule {}
