// data transfer object {} :
// class = {}
// lợi ích sử dụng dto:
// - giúp validate dữ liệu
// - giúp kiểm tra dữ liệu đầu vào
// - giúp kiểm tra dữ liệu đầu ra
// FE -> BE phải thống nhất dữ liệu truyền vào
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'email phải đúng định dang',
    },
  )
  @IsNotEmpty({
    message: 'email không được để trống',
  })
  email: string;

  @IsNotEmpty({
    message: 'password không được để trống',
  })
  password: string;

  name: string;
  address: string;
}
