import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './prisma/prisma.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { AuthModule } from './Auth/auth.module';
import { MoviesModule } from './Movie/moviesModule';
import { SeriesModule } from './Serie/series.module';
import { BookModule } from './Book/bookModule';
import { GamesModule } from './Game/gamesModule';
import { ReviewModule } from './Review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),

    PrismaModule,
    RabbitMQModule,
    AuthModule,
    MoviesModule,
    SeriesModule,
    BookModule,
    GamesModule,
    ReviewModule,
  ],
})
export class AppModule {}