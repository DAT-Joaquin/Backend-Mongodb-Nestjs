// data transfer object {} :
// class = {}
// lợi ích sử dụng dto:
// - giúp validate dữ liệu
// - giúp kiểm tra dữ liệu đầu vào
// - giúp kiểm tra dữ liệu đầu ra
// FE -> BE phải thống nhất dữ liệu truyền vào

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  address: string;
}
