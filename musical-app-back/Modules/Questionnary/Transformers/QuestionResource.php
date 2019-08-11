<?php

namespace Modules\Questionnary\Transformers;

use Illuminate\Http\Resources\Json\Resource;
use Modules\Questionnary\Transformers\LevelResource;

class QuestionResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'text' => $this->text,
            'level_id' => $this->level_id,
            'level' => $this->level->label
        ];
    }

    public function level()
    {
        return $this->belongsTo(LevelResource);
    }
}
