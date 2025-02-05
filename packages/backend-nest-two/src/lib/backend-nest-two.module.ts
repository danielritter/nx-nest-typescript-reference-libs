import { NestBackendNestOneModule } from '@backend/nest-one';
import { Module } from '@nestjs/common';

@Module({
	imports: [NestBackendNestOneModule],
	controllers: [],
	providers: [],
	exports: [],
})
export class NestBackendNestTwoModule {}
