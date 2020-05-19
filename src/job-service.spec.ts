jest.mock('./some-import');
import { SomeImport } from './some-import';
import { JobService } from "./job-service";

describe('job service', () => {
    beforeEach(() => {
        (SomeImport as jest.Mock).mockImplementation(() => {
            return {
                getSomeJob: jest.fn().mockReturnValue('mocked')
            } as SomeImport;
        });
    });

    it('should do some job successfully', () => {
        // given
        const jobService = new JobService();

        // when
        const jobResult = jobService.doSomeJob('awesome job');

        // then
        expect(jobResult).toBe('awesome job - mocked');
    });
})