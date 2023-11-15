import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { resolve } from "path";

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://ipz203bmo:Doogee1203@cluster0.4ev8bnv.mongodb.net/?retryWrites=true&w=majority'),
        FileModule,
        ServeStaticModule.forRoot({
            rootPath: resolve(__dirname, 'static')
        })
    ]
})
export class AppModule { }