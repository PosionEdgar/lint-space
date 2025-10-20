import chalk from 'chalk';
import { PKG_NAME, UNICONDE } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
    success(text: string) {
        console.log(green(text));
    },
    info(text: string) {
        console.log(blue(text));
    },
    warn(text: string) {
        console.log(yellow(text))
    },
    error(text: string) {
        console.log(red(text))
    },
    result(text: string, pass: boolean) {
        console.info(
            blue(`[${PKG_NAME}] ${text}`),
            pass ? green(UNICONDE.success) : red(UNICONDE.failure)
        )
    }
}