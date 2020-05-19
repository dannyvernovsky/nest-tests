import { SomeImport } from './some-import';

export class JobService {
    doSomeJob(jobName: string) {
        const someImport = new SomeImport();

        return `${jobName} - ${someImport.getSomeJob()}`;
    }
}