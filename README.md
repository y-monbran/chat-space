## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many :chats

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|string|null: false|

### Association
- has_many :groups_users
- has_many :chats


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user