import { User } from '../../domain/entities/user.entity';
import { UserOrmEntity } from '../entities/user.orm-entity';

export class UserMapper {
  static toDomain(userOrmEntity: UserOrmEntity): User {
    return new User(userOrmEntity.id, userOrmEntity.name, userOrmEntity.email);
  }

  static toOrmEntity(user: User): UserOrmEntity {
    const userOrmEntity = new UserOrmEntity();
    userOrmEntity.id = user.id;
    userOrmEntity.name = user.name;
    userOrmEntity.email = user.email;
    return userOrmEntity;
  }
}
