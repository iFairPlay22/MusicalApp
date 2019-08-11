<?php

namespace Modules\Questionnary\Transformers;

use Illuminate\Http\Resources\Json\Resource;
use Modules\Questionnary\Transformers\QuestionResource;
use Modules\Questionnary\Transformers\PropositionResource;

class AnswerResource extends Resource
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
            'question_id' => $this->question_id,
            'question' => $this->question->text,
            'proposition_id' => $this->proposition_id,
            'proposition' => $this->proposition->text,
            'goodAnswer' => $this->goodAnswer
        ];
    }

    public function question()
    {
        return $this->belongsTo(QuestionResource);
    }

    public function proposition()
    {
        return $this->belongsTo(PropositionResource);
    }
}
