import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
      const mongoDbURL = configService.get<string>('MONGO_DB_URL');
      return mongoose.connect(mongoDbURL);
    },
    inject: [ConfigService],
  },
];
