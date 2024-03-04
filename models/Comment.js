const Comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      comment_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nickName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      comment_content: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
      registered_date: {
        type: 'TIMESTAMP',
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      freezeTableName: true,
    },
  );
  return Comment;
};

module.exports = Comment;
