import {
  Column,
  ColumnOptions,
  ColumnType,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

const postgresSqliteTypeMapping: { [key: string]: ColumnType } = {
  'timestamp with time zone': 'datetime',
  enum: 'text',
};

function resolveDbType(type: ColumnType): ColumnType {
  const isTestEnv = process.env.NODE_ENV === 'test';
  if (isTestEnv && postgresSqliteTypeMapping[type.toString()]) {
    return postgresSqliteTypeMapping[type.toString()];
  }
  return type;
}

export function DbAwareColumn(columnOptions: ColumnOptions) {
  if (columnOptions.type) {
    columnOptions.type = resolveDbType(columnOptions.type);
  }
  return Column(columnOptions);
}

export function DbAwareCreateDateColumn(columnOptions: ColumnOptions) {
  if (columnOptions.type) {
    columnOptions.type = resolveDbType(columnOptions.type);
  }
  return CreateDateColumn(columnOptions);
}

export function DbAwareUpdateDateColumn(columnOptions: ColumnOptions) {
  if (columnOptions.type) {
    columnOptions.type = resolveDbType(columnOptions.type);
  }
  return UpdateDateColumn(columnOptions);
}
