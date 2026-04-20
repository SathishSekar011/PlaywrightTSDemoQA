import * as dotenv from 'dotenv'
import * as fs from 'fs'

if (fs.existsSync('.env.defaults')) {
    dotenv.config({ path: '.env.defaults' });
}

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}


