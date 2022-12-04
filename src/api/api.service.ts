import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';

const nationalizeBaseUrl = 'https://api.nationalize.io';
const genderizeBaseUrl = 'https://api.genderize.io';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}
  async getNationality(name: string): Promise<any> {
    const requestUrl = `${nationalizeBaseUrl}/?name=${name}`;
    const { data } = await firstValueFrom(
      this.httpService.get(requestUrl).pipe(
        catchError((error: any) => {
          console.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    console.log('getNationality data', data);
    if (!data?.country?.length) return 'gipsy';
    const sorted = data.country.sort(
      (curr: any, prev: any) => curr.probability > prev.probability,
    );
    return sorted[0].country_id;
  }

  async getGender(name: string): Promise<any> {
    const requestUrl = `${genderizeBaseUrl}/?name=${name}`;
    const { data } = await firstValueFrom(
      this.httpService.get(requestUrl).pipe(
        catchError((error: any) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data?.gender;
  }
}
